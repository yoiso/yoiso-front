import axios from 'axios';
import 'yokui/css/positioning';
import { ErrorAlert } from 'yokui/react/alerts';
import { Form } from 'yokui/react/forms';
import { Input } from 'yokui/react/inputs';
import { PrimaryButton } from 'yokui/react/buttons';
import { FlexCol, Grid } from 'yokui/react/flex-grids';

const RegistrationForm = () => {
  let showAlert = false;

  return (
    <Form {...{
      onSubmit: (data) => {
        return axios.post(process.env.API_URL + '/users', data.current)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            showAlert = true;
          });
      },
      fields: {
        name: {
          label: 'Nama Lengkap',
          children: <Input type='text' placeholder='Sesuai identitas diri'/>
        },
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
        return (
          <div>
            <Grid>
              <FlexCol />
              <FlexCol>
                <ErrorAlert withIcon show={showAlert}>Pendaftaran gagal. Periksa lagi.</ErrorAlert>

                {fields.name}
                {fields.email}
                {fields.password}

                <div class='float-right'>
                  <PrimaryButton {...{
                    type: 'submit',
                  }}>Daftar</PrimaryButton>
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

export default RegistrationForm;
