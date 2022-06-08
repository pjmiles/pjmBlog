import React from "react";

const PostBlog = () => {
  return (
      <>
        <div class="container mt-5">
          <h3 class="my-3">Compose Your Blog Here...</h3>
          <form>
          <input type="text" name="title" class="form-control" placeholder="Enter title here..."></input>
          <textarea name="content" cols="30" row="10" class="mt-3 form-control" placeholder="Enter content here" required></textarea>
          <input type="text" name="athur" class="mt-3 form-control" placeholder="Name"></input>
          <input type="submit" value="Compose" class="mt-4 btn btn-md btn-danger"></input>
          </form>
        </div>
      </>
  )   
};

export default PostBlog
