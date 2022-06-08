import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Blog Titile</h5>
            <p className="card-text">Blog Content</p>
          </div>
          <textarea cols="30" row="10" className="mt-3 form-control"></textarea>
          <Link to="" className="btn btn-primary">
            Comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
