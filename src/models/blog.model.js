export class BlogModel {
  constructor(_id, _title, _desc, _imgUrl) {
    this.id = _id;
    this.title = _title;
    this.desc = _desc;
    this.imgUrl = _imgUrl;
  }
  static getContent() {
    return blogs;
  }
  static addBlog(title, desc, imgUrl) {
    let blog = new BlogModel(blogs.length + 1, title, desc, imgUrl);
    blogs.push(blog);
  }
}

let blogs = [
  new BlogModel(
    1,
    "Sample Blog 1",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "https://www.rakiyaworld.com/assets/uploads/media-uploader/mit-evaluating-performance-0-21617358969.jpg"
  ),
  new BlogModel(
    2,
    "Sample Blog 2",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    "https://www.rakiyaworld.com/assets/uploads/media-uploader/mit-evaluating-performance-0-21617358969.jpg"
  ),
  new BlogModel(
    3,
    "Sample Blog 3",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    "https://www.rakiyaworld.com/assets/uploads/media-uploader/mit-evaluating-performance-0-21617358969.jpg"
  ),
];
