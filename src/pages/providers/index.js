import { Column, Row, Tile } from '@carbon/react';
import React from 'react';

const ProvidersPage = () => {
  return (
    <Row className="mt-1">
      <Column lg={4} md={4} sm={8}>
        <Tile id="tile-1" className="clickable-tile" onClick={() => alert('hello')}>
          Audit Board
        </Tile>
      </Column>
      <Column lg={4} md={4} sm={8}>
        <Tile id="tile-1" className="clickable-tile" onClick={() => alert('hello')}>
          Logic Manager Inc.
        </Tile>
      </Column>
      <Column lg={4} md={4} sm={8}>
        <Tile id="tile-1" className="clickable-tile" onClick={() => alert('hello')}>
          The Guardian
        </Tile>
      </Column>
    </Row>
  );
};

export default ProvidersPage;
