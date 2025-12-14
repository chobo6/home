import { useNavigate } from "react-router-dom";
import { Container, Card, Table, Button } from "react-bootstrap";

export default function PostListPage({ posts }) {
const navigate = useNavigate();


return (
<Container className="mt-4" style={{ maxWidth: 600 }}>
<h3 className="text-center mb-3">커뮤니티</h3>
<Card>
<Card.Body>
<Table hover responsive className="mb-3">
<thead>
<tr>
<th style={{ width: "15%" }}>번호</th>
<th>제목</th>
<th style={{ width: "25%" }}>작성일</th>
</tr>
</thead>
<tbody>
{posts.map((post, idx) => (
<tr
key={post.id}
style={{ cursor: "pointer" }}
onClick={() => navigate(`/post/${post.id}`)}
>
<td>{idx + 1}</td>
<td>{post.title}</td>
<td>{post.date}</td>
</tr>
))}
</tbody>
</Table>
<div className="d-grid">
<Button onClick={() => navigate("/write")}>글쓰기</Button>
</div>
</Card.Body>
</Card>
</Container>
);
}