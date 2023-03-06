import React from 'react'
import Header from './Header'

//Contact details page
const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (

        <div>
            <Header/>
            <div className="container mt-5">
            <h2 className="mb-3"><i>24*7 Customer Services</i></h2>
            <h3 className="mb-3"><i>Contact us 📞</i></h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                    {formStatus}
                </button>
                <div className="col-md-6">
                    <div className="map_main">
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={360} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
        
    )
}

export default Contact
