export class Post {
  constructor(
    readonly id: number,
    readonly createdAt: number,
    readonly subject: string,
    readonly name: string,
    readonly tripcode: string,
    readonly thumbnail: string,
    readonly file: string,
    readonly fileWidth: number,
    readonly fileHeight: number,
  ) { }
}
