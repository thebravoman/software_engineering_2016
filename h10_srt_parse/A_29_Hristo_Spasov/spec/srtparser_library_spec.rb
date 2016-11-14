require "spec_helper"
require "srtparser_library"

empty_hash = {
    "number_of_words" => 0,
    "number_of_symbols" => 0,
    "number_of_lines" => 0,
    "number_of_sentences" => 0,
    "duration" => 0.0,
    "max_symbols_per_line" => 0,
    "average_symbols_per_line" => 0.0,
    "average_symbols_per_sentence" => 0.0,
    "average_duration" => 0.0
};

one_subtitle = {
    "number_of_words" => 14,
    "number_of_symbols" => 1,
    "number_of_lines" => 2,
    "number_of_sentences" => 1,
    "duration" => 385.6,
    "max_symbols_per_line" => 1,
    "average_symbols_per_line" => 0.5,
    "average_symbols_per_sentence" => 1.0,
    "average_duration" => 385.60
};

many_subtitles = {
    "number_of_words" => 144,
    "number_of_symbols" => 17,
    "number_of_lines" => 30,
    "number_of_sentences" => 28,
    "duration" => 615.39,
    "max_symbols_per_line" => 2,
    "average_symbols_per_line" => 0.57,
    "average_symbols_per_sentence" => 0.61,
    "average_duration" => 26.76
}

describe SRTParser do
    describe "parse_file" do
        context "given empty srt file" do
            it "counts zero matches" do
                expect(SRTParser.parse_file(Dir.pwd + '/spec/test_empty.srt')).to eql(empty_hash)
            end
        end
        context "given srt file with one subtitle" do
            it "counts words, symbols, etc. only on one subtitle" do
                expect(SRTParser.parse_file(Dir.pwd + '/spec/test_one_subtitle.srt')).to eql(one_subtitle)
            end
        end
        context "given srt file with many subtitles" do
            it "counts words, symbols, etc. on many subtitles" do
                expect(SRTParser.parse_file(Dir.pwd + '/spec/test_many_subtitles.srt')).to eql(many_subtitles)
            end
        end
    end
end
