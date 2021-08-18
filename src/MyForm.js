import React from "react";
import { Form, Button } from "react-bootstrap";

const MyForm = () => {
  return (
    <div style={{ width: "300px" }}>
      <img
        className="logo"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='273.442' height='32.361' viewBox='0 0 273.442 32.361'%3E %3Cdefs%3E %3Cstyle%3E .prefix__cls-1%7Bfill:%23fff%7D %3C/style%3E %3C/defs%3E %3Cg id='prefix__gmc_logo_new' data-name='gmc logo new' transform='translate(.341)'%3E %3Cpath id='prefix__Path_3' d='M1720.16 583.075a4.984 4.984 0 1 1 4.989 4.88 4.938 4.938 0 0 1-4.989-4.88m9.217 0a4.236 4.236 0 1 0-4.228 4.131 4.188 4.188 0 0 0 4.228-4.131m-6.8.012a2.77 2.77 0 0 1 2.691-3.059 2.491 2.491 0 0 1 2.435 1.658l-.925.353a1.6 1.6 0 0 0-1.51-1.128c-1.169 0-1.7 1.059-1.7 2.174s.517 2.134 1.713 2.134a1.489 1.489 0 0 0 1.467-1.1l.883.326a2.381 2.381 0 0 1-2.35 1.671 2.753 2.753 0 0 1-2.706-3.03' class='prefix__cls-1' data-name='Path 3' transform='translate(-1457.025 -555.731)'/%3E %3Cpath id='prefix__Path_4' d='M154.019 457.224h14.862l-.185 3.888a17.128 17.128 0 0 1-1.319 6.089 15.115 15.115 0 0 1-3.125 4.722 13.958 13.958 0 0 1-4.608 3.077 14.941 14.941 0 0 1-5.809 1.111 15.843 15.843 0 0 1-6.3-1.249 15.307 15.307 0 0 1-5.024-3.426 16.2 16.2 0 0 1-4.514-11.3 16.573 16.573 0 0 1 1.181-6.227 16.173 16.173 0 0 1 3.265-5.139 15.261 15.261 0 0 1 11.206-4.745 15.856 15.856 0 0 1 4.374.6 14.711 14.711 0 0 1 3.913 1.758 14.381 14.381 0 0 1 3.218 2.824 14.064 14.064 0 0 1 2.292 3.842H158.6a6.629 6.629 0 0 0-2.708-1.321 11.722 11.722 0 0 0-2.338-.3 7.633 7.633 0 0 0-3.193.672 8.113 8.113 0 0 0-2.593 1.851 8.631 8.631 0 0 0-1.738 2.756 8.973 8.973 0 0 0-.625 3.333 9.09 9.09 0 0 0 .625 3.379 8.631 8.631 0 0 0 1.738 2.756 8.127 8.127 0 0 0 2.593 1.849 7.614 7.614 0 0 0 3.193.674 10.188 10.188 0 0 0 1.505-.14 8.106 8.106 0 0 0 1.9-.555 7.361 7.361 0 0 0 1.944-1.227 6.005 6.005 0 0 0 1.552-2.154h-6.436v-7.4z' class='prefix__cls-1' data-name='Path 4' transform='translate(-138.341 -443.892)'/%3E %3Cpath id='prefix__Path_5' d='M1199.923 460.141a15.842 15.842 0 0 1-1.227 6.205 15.793 15.793 0 0 1-8.424 8.519 15.54 15.54 0 0 1-6.227 1.251 15.248 15.248 0 0 1-6.159-1.251 15.981 15.981 0 0 1-5.024-3.424 16.379 16.379 0 0 1-3.4-5.071 15.53 15.53 0 0 1-1.249-6.227 15.81 15.81 0 0 1 1.227-6.2 16.4 16.4 0 0 1 3.356-5.116 16.059 16.059 0 0 1 5.023-3.5 15.08 15.08 0 0 1 6.229-1.3h15.88v16.111zm-7.406 0v-8.7h-8.472a8.283 8.283 0 0 0-5.949 2.523 8.921 8.921 0 0 0-1.806 2.777 9.048 9.048 0 0 0-.025 6.782 8.2 8.2 0 0 0 1.785 2.709 8.518 8.518 0 0 0 2.684 1.8 8.249 8.249 0 0 0 3.311.672 8.16 8.16 0 0 0 3.331-.672 8.878 8.878 0 0 0 2.686-1.8 8.008 8.008 0 0 0 1.8-2.709 8.772 8.772 0 0 0 .65-3.379' data-name='Path 5' transform='translate(-996.872 -443.892)' style='fill:%23e60a14'/%3E %3Cpath id='prefix__Path_6' d='M556.729 444.03l10.464 22.732 10.416-22.732h7.779v32.084h-7.409v-15.14l-6.759 15.14h-8.1l-6.759-15.14v15.14h-7.411V444.03z' class='prefix__cls-1' data-name='Path 6' transform='translate(-480.603 -443.892)'/%3E %3Cpath id='prefix__Path_7' d='M790.072 443.655l7.406 12.242 7.271-12.294 8.658-.033-12.2 20.6.04 11.562-7.408.025-.039-11.557-12.34-20.514z' class='prefix__cls-1' data-name='Path 7' transform='translate(-674.444 -443.509)'/%3E %3Cpath id='prefix__Path_8' d='M996.437 465.781a15.616 15.616 0 0 1-2.385 4.213 16.4 16.4 0 0 1-3.449 3.265 15.739 15.739 0 0 1-9.074 2.847 15.437 15.437 0 0 1-6.18-1.249 15.625 15.625 0 0 1-5.024-3.426 16.169 16.169 0 0 1-3.356-5.094 16.271 16.271 0 0 1 .023-12.455 16.558 16.558 0 0 1 3.4-5.116 16.059 16.059 0 0 1 5.023-3.471 15.464 15.464 0 0 1 10.95-.509 16.717 16.717 0 0 1 4.236 2.106 15.541 15.541 0 0 1 3.424 3.241 16.023 16.023 0 0 1 2.362 4.211h-8.517a8.569 8.569 0 0 0-2.777-2.129 7.96 7.96 0 0 0-3.518-.787 8.282 8.282 0 0 0-5.949 2.523 8.973 8.973 0 0 0-1.806 2.777 9.04 9.04 0 0 0-.023 6.782 8.2 8.2 0 0 0 1.783 2.709 8.509 8.509 0 0 0 2.684 1.8 8.526 8.526 0 0 0 6.9-.113 8.528 8.528 0 0 0 2.8-2.13z' class='prefix__cls-1' data-name='Path 8' transform='translate(-828.075 -443.884)'/%3E %3Cpath id='prefix__Path_9' d='M1386.532 476.11h-11.572v-32.08h11.572a20.069 20.069 0 0 1 6.678 1.1 16.856 16.856 0 0 1 5.551 3.2 15.176 15.176 0 0 1 3.787 5.056 16.547 16.547 0 0 1 0 13.264 15.715 15.715 0 0 1-3.739 5.081 16.39 16.39 0 0 1-5.528 3.245 19.95 19.95 0 0 1-6.749 1.131m-4.046-7.526h4.046a12.215 12.215 0 0 0 4.421-.728 8.789 8.789 0 0 0 3.082-1.929 7.775 7.775 0 0 0 1.788-2.728 8.629 8.629 0 0 0 0-6.257 7.767 7.767 0 0 0-1.788-2.729 8.762 8.762 0 0 0-3.082-1.928 12.179 12.179 0 0 0-4.421-.729h-4.046z' class='prefix__cls-1' data-name='Path 9' transform='translate(-1169.236 -443.892)'/%3E %3Cpath id='prefix__Path_10' d='M1565.3 476.115V444.03h23.193v7.527h-15.667v4.752h15.667v7.526h-15.667v4.753h15.667v7.527z' class='prefix__cls-1' data-name='Path 10' transform='translate(-1327.92 -443.892)'/%3E %3Cpath id='prefix__Path_11' d='M355.014 443.2a16.181 16.181 0 1 0 16.186 16.176 16.179 16.179 0 0 0-16.186-16.176m0 24.626a8.446 8.446 0 1 1 8.45-8.45 8.445 8.445 0 0 1-8.45 8.45' class='prefix__cls-1' data-name='Path 11' transform='translate(-305.429 -443.2)'/%3E %3C/g%3E %3C/svg%3E"
      />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
