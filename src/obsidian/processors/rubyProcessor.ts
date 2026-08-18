import type { Processor } from "../../@types";

export class RubyProcessor implements Processor {
    private MD_RUBY_REGEX = new RegExp(
        [
            "{", // head
            "(.+?)", // base
            "\\|", // divider
            "(.+?)", // ruby
            "}", // tail
        ].join(""),
        "g",
    );
    private HTML_RUBY_STRING = [
        "<ruby>", // head
        "$1", // base
        "<rt>", // divider
        "$2", // ruby
        "</rt></ruby>", // tail
    ].join("");

    process(markdown: string) {
        return markdown.replaceAll(this.MD_RUBY_REGEX, this.HTML_RUBY_STRING);
    }
}
