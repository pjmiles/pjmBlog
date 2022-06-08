import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title mt-2">Blog Titile</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Blog Content</p>
          </div>
          <div className="card-body">
            <textarea
              cols="10"
              row="10"
              placeholder="Leave a comment"
              className="mt-3 form-control"
            ></textarea>
            <Link to="" className="btn btn-primary mt-3">
              Comment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
