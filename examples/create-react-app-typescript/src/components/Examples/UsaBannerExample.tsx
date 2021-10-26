import React from 'react';
import { UsaBanner } from '@cmsgov/design-system';

function UsaBannerExample(): React.ReactElement {
  return (
    <div>
      <h2>Usa Banner Example</h2>
      <UsaBanner />
      <UsaBanner locale="es" />
    </div>
  );
}

export default UsaBannerExample;
