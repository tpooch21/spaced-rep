/**
 * Only submit form when information is valid
 * Essentially testing the validation of react-hook-form
 */
import AddProblemForm from "../AddProblemForm";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, act } from "@testing-library/react";

const mockSubmitData = jest.fn(() => {
  return Promise.resolve("Success");
});

it("displays a form with no error messages on initial render", () => {
  const tree = renderer.create(<AddProblemForm />);
  expect(tree).toMatchSnapshot();
});

it("displays correct error message when name field is left blank", async () => {
  const { getByTestId, getByRole } = render(<AddProblemForm />);

  await act(async () => {
    fireEvent.submit(getByRole("button"));
  });

  expect(getByTestId("name-msg").innerHTML).toEqual("Name is required");
});

it("displays correct error message when url field is left blank", async () => {
  const { getByTestId, getByRole } = render(<AddProblemForm />);

  await act(async () => {
    fireEvent.submit(getByRole("button"));
  });

  expect(getByTestId("url-msg").innerHTML).toEqual("URL is required");
});

it("displays correct error message when url is invalid", async () => {
  const { getByTestId, getByRole } = render(<AddProblemForm />);

  await act(async () => {
    fireEvent.change(getByTestId("url"), {
      target: {
        value: "Invalid url",
      },
    });
    fireEvent.submit(getByRole("button"));
  });

  expect(getByTestId("url-msg").innerHTML).toEqual("URL is invalid");
});

// "does not submit data to backend when there are any errors"
