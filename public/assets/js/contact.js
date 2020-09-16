$("#submit").click(async (event) => {
    try {
        event.preventDefault();

        const userMessage = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        const response = await $.post("/api/sendmail", userMessage);

        console.log(response);
    }

    catch (err) {
        console.log(err);
    }
});

const displayResult = () => {

}
