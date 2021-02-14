export class Article {
  constructor(public title: string, public link: string, public votes?: number) {
  }

  voteUp(): boolean {
    // @ts-ignore
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    // @ts-ignore
    this.votes -= 1;
    return false;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return '';
      return '';
    }
  }
}
