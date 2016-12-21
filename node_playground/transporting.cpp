#include <iostream>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <algorithm>
#include <sstream>
#include <cstring>
#include <unistd.h>

using namespace std;

class Error {
   const string message_;
public:
   Error(string message) : message_(message) {}
   
   void write_message() {
      cout << "ERR: " << message_ << endl;
   }
};

class Card {
   char suit_;
   char rank_;
   int power_;
public:
   Card(char suit, char rank, int power) :
      suit_(suit), rank_(rank), power_(power) {}
   
   void print_card() const {
      cout << suit_;
      if(rank_ == 'T') cout << 10;
      else cout << rank_;
   }
   
   int get_power() const{
      return power_;
   }
   
   char get_rank() const {
      return rank_;
   }
   
   char get_suit() const {
      return suit_;
   }
   
   void set_power(int new_power) {
      power_ = new_power;
   }
   
   bool belote_available() const {
      if(rank_ > '1' && rank_ < '7') return false;
      return true;
   }
   
   bool santase_available() const {
      if(rank_ > '1' && rank_ < '9') return false;
      return true;
   }
   
   bool operator<(Card other) const {
      if(power_ < other.get_power()) {
         return true;
      }
      return false;
   }
};

class Deck {
protected:
   vector<Card> deck_;
public:
   Deck() {
      const char suits_name[4] = {'S', 'H', 'D', 'C'};
      const char ranks_name[13] = {'2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'};
      int power =  0;
      for(int suit = 0; suit < 4; suit++) {
         for(int rank = 0; rank < 13; rank++) {
            Card new_card(suits_name[suit], ranks_name[rank], power);
            deck_.push_back(new_card);
            power++;
         }
      }
      print_deck();
   }
   
   void shuffle() {
      srand( unsigned(time(0)) );
      random_shuffle(deck_.begin(), deck_.end());
      print_deck();
   }
   
   void sort_deck() {
      Card lowest('C', 'A', 51);
      int position;
      for(int sorted = 0; sorted < deck_.size(); sorted++) {
         for(int current = 0; current < 51 - sorted; current++) {
            if(deck_[current]<lowest) {
               lowest = deck_[current];
               position = current;
            }
         }
         deck_.erase(deck_.begin() + position);
         deck_.push_back(lowest);
         lowest = Card('C', 'A', 51);
      }
   }
   
   void size() const {
      cout << deck_.size() << endl;
   }
   
   void top_card() const {
      if(deck_.size() < 1) throw Error("Not enough cards in deck.");
      deck_.back().print_card();
      cout << endl;
   }
   
   void bottom_card() const {
      if(deck_.size() < 1) throw Error("Not enough cards in deck.");
      deck_.front().print_card();
      cout << endl;
   }
   
   void draw_top_card() {
      if(deck_.size() < 1) throw Error("Not enough cards in deck.");
      top_card();
      deck_.pop_back();
   }
   
   void draw_bottom_card() {
      if(deck_.size() < 1) throw Error("Not enough cards in deck.");
      bottom_card();
      deck_.erase(deck_.begin());
   }
   
   void print_deck() const {
      for(vector<Card>::const_iterator it = deck_.begin(); it != deck_.end(); ++it) {
         (*it).print_card();
         cout << ' ';
      }
      cout << endl;
   }
};

class Hand : public Deck {
protected:
   vector<Card> hand_;
   int hand_size;
public:
   Hand() {}
   //virtual void deal() = 0;
   
   void remaining() const {
      cout << hand_.size() << endl;
   }
   
   void play_card() {
      if(hand_.size() < 1) throw Error("Not enough cards in hand.");
      hand_.back().print_card();
      hand_.pop_back();
      cout << endl;
   }
   
   void highest() {
      if(hand_.size() < 1) throw Error("Not enough cards in hand.");
      int highest = 0, i = 0, position;
      for(vector<Card>::const_iterator it = hand_.begin(); it != hand_.end(); ++it) {
         int current = (*it).get_power();
         if(current > highest) {
            highest = current;
            position = i;
         }
         i++;
      }
      hand_[position].print_card();
      hand_.erase(hand_.begin() + position);
      cout << endl;
   }
   
   void deal() {
      if(deck_.size() < hand_size) throw Error("Not enough cards in deck.");
      for(int i = deck_.size() - 1; hand_.size() < hand_size; i--) {
         hand_.push_back(deck_[i]);
         deck_.erase(deck_.begin() + i);
      }
      print_hand();
   }
   
   void print_hand() const {
      for(vector<Card>::const_iterator it = hand_.begin(); it != hand_.end(); ++it) {
         (*it).print_card();
         cout << ' ';
      }
      cout << endl;
   }
};

class Belote : public Hand {
public:
   Belote() {
      convert_deck();
      shift_powers();
      hand_size = 8;
   }
   
   void convert_deck() {
      for(vector<Card>::iterator it = deck_.begin(); 
      it != deck_.end(); ++it) {
            if(!(*it).belote_available()) {
               deck_.erase(it);  
               it--;
            }
      }
   }
   
   void shift_card_power(vector<Card>::iterator card, int times) {
      (*card).set_power((*card).get_power() + times);
      for(int i = 0; i < times; i++) {
         card++;
         (*card).set_power((*card).get_power() - 1);
      }
   }
   
   void shift_powers() {
      for(vector<Card>::iterator it = deck_.begin(); 
      it != deck_.end(); ++it) {
         if((*it).get_rank() == 'T') {
            shift_card_power(it, 3);
         }
      }
   }
   
   void belote() {
      bool belote = false;
      bool king[4], queen[4];
      fill_n(king, 4, false);
      fill_n(queen,4, false); 
      
      for(int i = 0; i < hand_.size(); i++) {
         int power = hand_[i].get_power()/10 - 1;
         switch(hand_[i].get_rank()) {
            case 'Q': queen[power] = true; break;
            case 'K': king[power] = true; break;
         }
      }
      for(int i = 0; i < 4; i++) {
         if(king[i] && queen[i]) belote =  true;
      }
      if(belote) cout << "true" << endl;
      else cout << "false" << endl;
   }
   
   vector<int> powers_in_vector() {
      vector<int> powers;
      for(int card = 0; card < hand_.size(); card++) {
         int current = hand_[card].get_power();
         powers.push_back(current);
      }
      sort(powers.begin(), powers.end());
      return powers;
   }
   
   int consec_cards() {
      vector<int> v(powers_in_vector());
      int s = v.size();
      int ret = 0;
      bool seqstart = true;
      if(s < 2) return 0;
      for(int i = 1; i < s; i++) {
         if(v[i - 1] + 1 == v[i]) {
         if(seqstart) ret++;
            seqstart = false;
            ret++;
         } else seqstart = true;
      }
      return ret;
   }
   
   void consecutive(int num) {
      bool tierce = false;
      if(consec_cards() >= num ) tierce = true;
      if(tierce) cout << "true" << endl;
      else cout << "false" << endl;
   }
   
   void highest_of_suit(char suit) {
      Card highest(suit, '6', 2);
      for(int i = 0; i < hand_.size(); i++) {
         Card current = hand_[i];
         if(current.get_suit() == suit) {
            if(highest.get_power() < current.get_power()) {
               highest = current;
            }
         }
      }
      if(highest.get_rank() == '6') cout << "No cards of " << suit << " in hand.";
      else highest.print_card();
      cout << endl;
   }
   
   
};

class War : public Hand {
public:
   War () {
      hand_size =  26;
   }
};

class Santase : public Hand {
public:
   Santase () {
      hand_size = 6;
      convert_deck();
      shift_powers();
   }
   
   void convert_deck() {
      for(vector<Card>::iterator it = deck_.begin(); 
      it != deck_.end(); ++it) {
            if(!(*it).santase_available()) {
               deck_.erase(it);  
               it--;
            }
      }
   }
   
   void shift_card_power(vector<Card>::iterator card, int times) {
      (*card).set_power((*card).get_power() + times);
      for(int i = 0; i < times; i++) {
         card++;
         (*card).set_power((*card).get_power() - 1);
      }
   }
   
   void shift_powers() {
      for(vector<Card>::iterator it = deck_.begin(); 
      it != deck_.end(); ++it) {
         if((*it).get_rank() == 'T') {
            shift_card_power(it, 3);
         }
      }
   }
   
   void king_and_queen(string type, char trump) {
      bool result = false;
      bool king[4], queen[4];
      fill_n(king, 4, false);
      fill_n(queen,4, false); 
      
      for(int i = 0; i < hand_.size(); i++) {
         //if trump and true on forty skip
         if(hand_[i].get_suit() == trump && type == "twenty") continue;
         //if trump and false on forty skip
         if(hand_[i].get_suit() != trump && type == "forty") continue;
         int power = hand_[i].get_power()/10 - 1;
         switch(hand_[i].get_rank()) {
            case 'Q': queen[power] = true; break;
            case 'K': king[power] = true; break;
         }
      }
      for(int i = 0; i < 4; i++) {
         if(king[i] && queen[i]) result =  true;
      }
      if(result) cout << "true" << endl;
      else cout << "false" << endl;
   }
   
};

int main(int argc, char* argv[]) {
   vector<string> command;
   string segment;
   string arguments = argv[1];
   istringstream istr(arguments);
   while(getline(istr, segment, '.')) {
      command.push_back(segment);
   }
   try{
      if(command[0] == "War") {
         War game;
         bool dealt = false;
         for(int i = 1; i < command.size(); i++) {
            if(command[i]=="size") {
               if(dealt == true) {
                  dealt = false;
               }
               game.size();
            }
            else if(command[i]=="draw_top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_top_card();
            }
            else if(command[i]=="draw_bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_bottom_card();
            }
            else if(command[i]=="top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.top_card();
            }
            else if(command[i]=="bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.bottom_card();
            }
            else if(command[i]=="shuffle") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.shuffle();
            }
            else if(command[i]=="sort") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.sort_deck();
            }
            else if(command[i]=="deal") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.deal(); 
                  dealt = true;
            }
            //after deal functions
            else if(command[i]=="remaining") {
               if(dealt == false) throw Error("Uknown command.");
               game.remaining();
            }
            else if(command[i]=="play_card") {
               if(dealt == false) throw Error("Uknown command.");
               game.play_card();
            }
            else if(command[i]=="highest") {
               if(dealt == false) throw Error("Uknown command.");
               game.highest();
            }
            else throw Error("Unknown command");
         }
      } else if (command[0] == "Belote") {
         bool dealt = false;
         Belote game;
         for(int i = 1; i < command.size(); i++) {
            if(command[i]=="size") {
               if(dealt == true) {
                  dealt = false;
               }
               game.size();
            }
            else if(command[i]=="draw_top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_top_card();
            }
            else if(command[i]=="draw_bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_bottom_card();
            }
            else if(command[i]=="top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.top_card();
            }
            else if(command[i]=="bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.bottom_card();
            }
            else if(command[i]=="shuffle") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.shuffle();
            }
            else if(command[i]=="sort") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.sort_deck();
            }
            else if(command[i]=="deal") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.deal(); 
                  dealt = true;
            }
            //after deal functions
            else if(command[i]=="remaining") {
               if(dealt == false) throw Error("Uknown command.");
               game.remaining();
            }
            else if(command[i]=="play_card") {
               if(dealt == false) throw Error("Uknown command.");
               game.play_card();
            }
            else if(command[i]=="highest") {
               if(dealt == false) throw Error("Uknown command.");
               game.highest();
            }
            else if(command[i]=="tierce?") {
               if(dealt == false) throw Error("Uknown command.");
               game.consecutive(3);
            }
            else if(command[i]=="quarte?") {
               if(dealt == false) throw Error("Uknown command.");
               game.consecutive(4);
            }
            else if(command[i]=="quint?") {
               if(dealt == false) throw Error("Uknown command.");
               game.consecutive(5);
            }
            else if(command[i].find(":")) {
               if(dealt == false) throw Error("Uknown command.");
               istringstream hs(command[i]);
               string buff;
               getline(hs, buff, ':');
                  if(buff=="highest_of_suit") {
                     getline(hs, buff); 
                        if(buff=="spades") game.highest_of_suit('S');
                        else if(buff=="hearts") game.highest_of_suit('H');
                        else if(buff=="diamonds") game.highest_of_suit('D');
                        else if(buff=="clubs") game.highest_of_suit('C');
                        else throw Error("Uknown command.");
                     
                  } else {
                     throw Error("Uknown command.");
                  }
               
            }
            else throw Error("Unknown command");
         }
      } else if(command[0]=="Santase") {
         Santase game;
         bool dealt = false;
         for(int i = 1; i < command.size(); i++) {
            if(command[i]=="size") {
               if(dealt == true) {
                  dealt = false;
               }
               game.size();
            }
            else if(command[i]=="draw_top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_top_card();
            }
            else if(command[i]=="draw_bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.draw_bottom_card();
            }
            else if(command[i]=="top_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.top_card();
            }
            else if(command[i]=="bottom_card") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.bottom_card();
            }
            else if(command[i]=="shuffle") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.shuffle();
            }
            else if(command[i]=="sort") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.sort_deck();
            }
            else if(command[i]=="deal") {
               if(dealt == true) {
                  dealt = false;
               }
                  game.deal(); 
                  dealt = true;
            }
            //after deal functions
            else if(command[i]=="remaining") {
               if(dealt == false) throw Error("Uknown command.");
               game.remaining();
            }
            else if(command[i]=="play_card") {
               if(dealt == false) throw Error("Uknown command.");
               game.play_card();
            }
            else if(command[i]=="highest") {
               if(dealt == false) throw Error("Uknown command.");
               game.highest();
            }
            else if(command[i].find(":")) {
               if(dealt == false) throw Error("Uknown command.");
               istringstream hs(command[i]);
               string buff;
               getline(hs, buff, ':');
                  if(buff=="twenty?" || buff=="forty?") {
                     string com = buff;
                     getline(hs, buff); 
                        if(buff=="spades") game.king_and_queen(com.substr(0, com.size()-1), 'S');
                        else if(buff=="hearts") game.king_and_queen(com.substr(0, com.size()-1), 'H');
                        else if(buff=="diamonds") game.king_and_queen(com.substr(0, com.size()-1), 'D');
                        else if(buff=="clubs") game.king_and_queen(com.substr(0, com.size()-1), 'C');
                        else throw Error("Uknown command.");
                     
                  } else {
                     throw Error("Uknown command.");
                  }
            }
            else throw Error("Unknown command");
         }
      }
   } catch(Error e) {
      e.write_message();
   }
   return 0;
}
