import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// Smoke Test
it('renders without crashing', () => {
    render(<NewTodoForm />);
});

// Snapshot Test
it('matches the snapshot', () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});