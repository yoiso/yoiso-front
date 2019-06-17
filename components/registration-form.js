import axios from 'axios';
import 'pivotal-ui/css/positioning';
import { Form } from 'yokui/react/forms';
import { Input } from 'yokui/react/inputs';
import { PrimaryButton } from 'yokui/react/buttons';
import { FlexCol, Grid } from 'yokui/react/flex-grids';

export default () => {
  return (
    <Form {...{
      onSubmit: ({initial, current}) => {
        console.log(initial);
        console.log(current);
        axios.post('https://webapi.com', current)
          .then((result) => {
            console.log(result);
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
      {({fields}) => {
        return (
          <div>
            <Grid>
              <FlexCol />
              <FlexCol>
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
