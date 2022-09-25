import { render, fireEvent, screen } from '@testing-library/react';
import NewOrderItems from './NewOrder';

test('increment counter', ()=>{
    render(<NewOrderItems itemUpdate={() => {}}/>)
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn)
    expect(counter).toHaveTextContent('2');
})

test('decrement counter', ()=>{
    render(<NewOrderItems itemUpdate={() => {}}/>)
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn)
    expect(counter).toHaveTextContent('0');
})