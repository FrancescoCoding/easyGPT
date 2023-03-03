export default class Message {
  constructor(content, role) {
    if (!content) throw Error("Please provide a message.");

    this.content = content;
    this.role = role ?? "user";
  }
}
