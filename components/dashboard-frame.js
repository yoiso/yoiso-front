import React from 'react';
import { Siteframe } from 'yokui/react/siteframe';
import { Icon } from 'yokui/react/iconography';
import { Grid, FlexCol } from 'yokui/react/flex-grids';
import { Table } from 'yokui/react/table';

export default () => {

  const data1 = [{
    account: 'Gaji',
    type: 'debit',
    amount: '3000000,00'
  }, {
    account: 'Sepatu',
    type: 'credit',
    amount: '345000,00'
  }];

  let tableDatas = [];
  let total = 0;
  let totalDebit = 0;
  let totalCredit = 0;

  for (var i = 0; i < data1.length; i++) {
    let tableData = {
      akun: data1[i].account
    }

    if (data1[i].type === 'debit') {
      tableData.debit = parseFloat(data1[i].amount).toLocaleString('id');
      totalDebit += parseFloat(data1[i].amount);
    }

    if (data1[i].type === 'credit') {
      tableData.kredit = parseFloat(data1[i].amount).toLocaleString('id');
      totalCredit += parseFloat(data1[i].amount);
    }

    tableDatas.push(tableData);
  }

  console.log(tableDatas);
  total = totalDebit - totalCredit;
  total = total.toLocaleString('id');

  const columns = ['akun', 'debit', 'kredit'];

    return (
      <div style={{position: 'relative', height: '100vh'}}>
        <Siteframe {...{
          headerProps: {
            companyName: 'Antaraksi',
            productName: 'yoiso'
          },
        }}>
          <Grid className='grid-show mbxl'>
            <FlexCol {...{breakpoint: 'sm'}}>
              <p>tes</p>
            </FlexCol>
            <FlexCol grow={4} style={{backgroundColor: 'white', height: '100vh'}}>
              <Table columns={columns} data={tableDatas} />
              <p>Jumlah: {total}</p>
            </FlexCol>
          </Grid>
        </Siteframe>
      </div>
    )
}
