import { Card } from "react-bootstrap";

const FilterBody = ({ filter, postData }) => {
  const filteredData = [];

  postData.map((post) => {
    if (post.userId === filter) {
      filteredData.push(post);
    }
  });
  return (
    <>
      <h2>Reviews for User: {filter}</h2>
      <div id='container'>
        {filteredData.map((post) => {
          return (
            <Card key={post.id} id='cards'>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Card.Text id='userid'>User ID: {post.userId}</Card.Text>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default FilterBody;
