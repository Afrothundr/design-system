jest.mock('lodash/uniqueId', () => (str) => `${str}snapshot`);
import { DateField } from './DateField';
import React from 'react';
import defaultDateFormatter from './defaultDateFormatter';
import renderer from 'react-test-renderer';

describe('DateField', () => {
  it('renders', () => {
    expect(renderer.create(<DateField />)).toMatchSnapshot();
  });

  describe('defaultDateFormatter', () => {
    it('prevents day over 2 digits', () => {
      const date = { day: '100', month: '10', year: '2000' };
      const formattedDate = defaultDateFormatter(date);
      expect(formattedDate.day).toBe('10');
      expect(formattedDate.month).toBe(date.month);
      expect(formattedDate.year).toBe(date.year);
    });

    it('prevents month over 2 digits', () => {
      const date = { day: '10', month: '100', year: '2000' };
      const formattedDate = defaultDateFormatter(date);
      expect(formattedDate.day).toBe(date.day);
      expect(formattedDate.month).toBe('10');
      expect(formattedDate.year).toBe(date.year);
    });

    it('prevents year over 4 digits', () => {
      const date = { day: '10', month: '10', year: '20000' };
      const formattedDate = defaultDateFormatter(date);
      expect(formattedDate.day).toBe(date.day);
      expect(formattedDate.month).toBe(date.month);
      expect(formattedDate.year).toBe('2000');
    });
  });
});
