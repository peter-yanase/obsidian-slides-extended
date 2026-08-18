import type { Processor } from "../../@types";

export class RubyProcessor implements Processor {
    private mdRubyRegex = /{(.+?)\|(.+?)}/g;
    private htmlRubyString = "<ruby>$1<rt>$2</rt></ruby>";

    process(markdown: string) {
        return markdown.replaceAll(this.mdRubyRegex, this.htmlRubyString);
    }
}
