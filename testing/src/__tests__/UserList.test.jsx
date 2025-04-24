// src/__tests__/UserList.test.jsx
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../components/UserList";

// Mock global fetch before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "sita" },
          { id: 2, name: "ram" },
        ]),
    })
  );
});

// Clean up mocks after each test
afterEach(() => {
  jest.restoreAllMocks();
});

test("renders list of users", async () => {
  render(<UserList />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getAllByTestId("user-item")).toHaveLength(2);
    expect(screen.getByText("sita")).toBeInTheDocument();
    expect(screen.getByText("ram")).toBeInTheDocument();
  });
});
