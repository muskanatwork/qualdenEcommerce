const Form = () => {
    return (
        <>

            <div class="form-container1">
                <div>
                    <h1 className="Quick-Enquiry">Quick Enquiry</h1>
                </div>
                <form>
                    <div class="form-group1">
                        <input type="text" id="productName" name="productName" placeholder="Enter product/service name..." />
                        <input type="text" id="yourName" name="yourName" placeholder="Enter your name..." />
                    </div>
                    <div class="form-group2">
                        <input type="email" id="email" name="email" placeholder="Enter your email..." />
                        <input type="text" id="india" name="india" placeholder="India" />
                    </div>
                    <div class="form-group3">
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone number..." />
                    </div>
                    <div class="form-group4">
                        <textarea id="requirement" name="requirement" placeholder="Enter your requirement..."></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </>
    )
}

export default Form