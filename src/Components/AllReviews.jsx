import { Card } from "react-bootstrap";

const AllReviews = ({ postData }) => {
  return (
    <>
      <h2>All Reviews</h2>
      <div id='container'>
        {postData.map((post) => {
          return (
            <>
              <Card key={post.id} id='cards'>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllReviews;
