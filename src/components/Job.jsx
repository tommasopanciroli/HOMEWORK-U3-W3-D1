import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3 d-flex"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9} className="d-flex align-items-center">
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      <button className="ms-auto">
        <i class="bi bi-star"></i>
      </button>
    </Col>
  </Row>
)

export default Job
