#include <iostream>
using namespace std;
class List {
  struct Node {
      int data_;
      Node* next_;
      Node* prev_;

      Node(int data) : data_(data), next_(0), prev_(0) {}
  };

  Node* head_;

public:
    ~List() {
        while(!empty()) {
            pop_back();
        }
        delete head_;
    };
    List() : head_(new Node(0)) {
        head_ -> prev_ = head_;
        head_ -> next_ = head_;
    }


    bool empty() {
        return head_ -> next_ == head_;
    }

    int front() {
        if(empty()){
        }
        return head_ -> next_ -> data_;
    }

    int back() {
        if(empty()) {
        }
        return head_ -> prev_ -> data_;
    }

    void push_back(int data) {
        Node* new_last = new Node(data);
        Node* last = head_ -> prev_;
        last -> next_ = new_last;
        new_last -> prev_ = last;
        new_last -> next_ = head_;
        head_ -> prev_ = new_last;
    }
    void pop_back() {
        Node* last = head_ -> prev_;
        last -> prev_ -> next_ = head_;
        head_ -> prev_ = last -> prev_;
        delete last;
    }

    class Iterator {
        Node* current_;
        friend class List;
    public:
        Iterator(Node* current) : current_(current) {}
        Iterator& operator++() {
            current_ = current_ -> next_;
            return *this;
        }
        Iterator operator++(int) {
            Iterator result(current_);
            current_ = current_ -> next_;
            return result;
        }
        int operator*() {
            return current_ -> data_;
        }
        bool operator!=(const Iterator& other) {
            return current_ != other.current_;
        }
    };

    Iterator begin() {
        return Iterator(head_ -> next_);
    }
    Iterator end() {
        return Iterator(head_);
    }
    Iterator insert(Iterator position, int val) {
        Node* next = position.current_;
        Node* prev = position.current_;
        next -> next_ = position.current_;
        position.current_ -> prev_


    }
};



int main(){
    List l1;
    for(int i = 0; i < 10; i++) {
        l1.push_back(i * 10);
        cout << l1.back() << " ";
    }
    cout << endl;
    for(List::Iterator it = l1.begin();it != l1.end(); it++) {
        cout << *it << " ";
    }
    return 0;
}
