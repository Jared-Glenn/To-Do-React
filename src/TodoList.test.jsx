import { render, fireEvent, toBeInTheDocument } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "./TodoList";

// Smoke Test
it('renders without crashing', () => {
    render(<TodoList />);
});

// Snapshot Test
it('matches the snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", () => {
    const { getByText, getByLabelText, queryByTestId } = render(<TodoList />);
    const input = getByLabelText("Item:");
    const button = getByText("Add To Do Item");

    let todo = queryByTestId("todo");
    expect(todo).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'stuff'}});
    fireEvent.click(button);

    todo = queryByTestId("todo");
    expect(todo).toBeInTheDocument();
});