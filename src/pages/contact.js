function Contact() {

    const handleformSubmit =(FormData)=>{
        console.log(FormData.entries());
        const formInputData=Object.fromEntries(FormData.entries());
        console.log(formInputData)
    }
    return (
        <section className='section-contact'>

            <h2 className='container-title'>
                contact us
            </h2>
            <div className='contact-wrapper container'>

                <form action={handleformSubmit}>

                    <input
                        type='text'
                        className='form-control'

                        required
                        autoComplete='false'
                        placeholder='Enter your name'
                        name='username'
                    />
                    <input
                        className='form-control'
                        type='email'
                        required
                        autoComplete='false'
                        placeholder='Enter your email'
                        name='email'
                    />
                    <textarea
                        className='form-control'
                        rows='10'
                        name='massege'
                        required
                        autoComplete='false'
                    ></textarea>




                    <button type='submit' >send</button>


                </form>
            </div>


        </section>


    )
}

export default Contact;