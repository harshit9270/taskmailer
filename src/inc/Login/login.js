import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faTimes);

export default function LoginModal(props) {
    return (
        <Modal
            {...props}
            // size="lg"
            dialogClassName="modal-30w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Task2Do
                </Modal.Title>
                <FontAwesomeIcon icon={faTimes} style={{ cursor: "pointer" }} onClick={props.onHide} />
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: "center", marginBottom: "45px" }}>
                    <h5>Sign In with</h5>

                    <Button variant="outline-primary" style={{ borderRadius: "50%", marginRight: "10px", padding: "9px 14px" }}> <FontAwesomeIcon icon={['fab', 'google']} />
                    </Button>
                    <Button variant="outline-danger" style={{ borderRadius: "50%", marginRight: "10px", padding: "9px 16px" }}> <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </Button>

                </div>

                <p>
                    The site is governed by Google <a href="https://policies.google.com/privacy"> Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a>.
                </p>
            </Modal.Body>
        </Modal>
    );
}

function TextTrigger() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setModalShow(true)}>Log in</span>

            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

function ButtonTrigger() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Log In
            </Button>

            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export { ButtonTrigger, TextTrigger };