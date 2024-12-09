import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  const handleRemove = (index) => {
    dispatch({
      type: 'REMOVE_FROM_FAVOURITES',
      payload: index,
    })
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <ListGroup>
            {favourites.map((favourite, i) => (
              <ListGroupItem className="bg-light text-warning" key={i}>
                <a href={favourite.url}>{favourite.company_name}</a>
                <button
                  className="ms-3 btn btn-danger"
                  onClick={() => handleRemove(i)}
                >
                  Remove
                </button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
