import axios from 'axios';
import 'yokui/css/positioning';
import { ErrorAlert } from 'yokui/react/alerts';
import { Form } from 'yokui/react/forms';
import { Input } from 'yokui/react/inputs';
import { PrimaryButton } from 'yokui/react/buttons';
import { FlexCol, Grid } from 'yokui/react/flex-grids';

const LoginForm = (props) => {

  return (
    <Form {...{
      onSubmit: async ({initial, current}) => {
        try {
          current.username = current.email;
          current.grant_type = 'password';
          current.client_id = 'client1';
          current.client_secret = 'secret';
          delete current.email;

          const response = await axios.post(process.env.API_URL + '/token', current);
          document.cookie = `access_token=${response.data.token}`;
          alert(document.cookie);

        } catch(error) {
          throw error.response;
        }
      },
      onSubmitError: (error) => {
        const { message } = error.data;
        const errorField = {};

        message.forEach((element) => {
          if (element.property == 'name') {
            errorField['name'] = element.constraints.length;
          }

          if (element.property == 'email') {
            errorField['email'] = element.constraints.isEmail;
          }

          if (element.property == 'password') {
            errorField['password'] = element.constraints.length;
          }
        });
        return errorField;
      },
      fields: {
        email: {
          label: 'Email',
          children: <Input type='email' placeholder='Email untuk verifikasi' />
        },
        password: {
          label: 'Password',
          children: <Input type='password' placeholder='Minimal 6 karakter' />
        }
      }
    }}>
      {({fields, state}) => {
        const { errors } = state;

        let showAlert = false;
        if (Object.keys(errors).length > 0) {
          showAlert = true;
        }

        return (
          <div>
            <Grid>
              <FlexCol />
              <FlexCol>
                <ErrorAlert withIcon show={showAlert}>Pendaftaran gagal. Periksa lagi.</ErrorAlert>

                {fields.email}
                {fields.password}

                <div className='float-right'>
                  <PrimaryButton {...{
                    type: 'submit',
                  }}>Masuk</PrimaryButton>
                </div>
              </FlexCol>
              <FlexCol />
            </Grid>
          </div>
        )
      }}
    </Form>
  )
}

export default LoginForm;
