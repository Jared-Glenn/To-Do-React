import { render } from "@testing-library/react";
import Todo from "./Todo";

// Smoke Test
it('renders without crashing', () => {
    render(<Todo />);
});

// Snapshot Test
it('matches the snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});