import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({loading, snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>

              {loading ? loading :
              <>
              <h6>Snacks: {snacks}</h6>
              <h6>Drinks: {drinks}</h6>
              </>
          }
          
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
