package com.ariba.tool;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/submit")
class Controller {

    @PostMapping
    public Response handleSubmit(@RequestBody Request request) {
        // Handle the incoming request data
        String input1 = request.getInput1();
        String input2 = request.getInput2();

        // Create a response
        String responseMessage = "Received input1: " + input1 + ", input2: " + input2;

        // Return the response
        return new Response(responseMessage);
    }

    public static class Request {
        private String input1;
        private String input2;

        // Getters and setters
        public String getInput1() {
            return input1;
        }

        public void setInput1(String input1) {
            this.input1 = input1;
        }

        public String getInput2() {
            return input2;
        }

        public void setInput2(String input2) {
            this.input2 = input2;
        }
    }

    public static class Response {
        private String response;

        public Response(String response) {
            this.response = response;
        }

        // Getter
        public String getResponse() {
            return response;
        }

        public void setResponse(String response) {
            this.response = response;
        }
    }
}
