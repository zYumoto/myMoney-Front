import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$"
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 10"
              text="Total de Debitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="R$ 0"
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
export default Dashboard;