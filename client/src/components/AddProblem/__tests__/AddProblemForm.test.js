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

  await act(async () => {
    fireEvent.change(getByTestId("url"), {
      target: {
        value: "Panda",
      },
    });
    fireEvent.submit(getByRole("button"));
  });

  expect(getByTestId("url-msg").innerHTML).toEqual("URL is invalid");
});

it("does not display an error message when name is entered", async () => {
  const { queryByTestId, getByTestId, getByRole } = render(<AddProblemForm />);

  await act(async () => {
    fireEvent.change(getByTestId("name"), {
      target: {
        value: "Two Sum",
      },
    });
    fireEvent.submit(getByRole("button"));
  });

  expect(queryByTestId("name-msg")).toBeNull();
});

it("does not display an invalid URL error message for a valid URL", async () => {
  const { queryByTestId, getByTestId, getByRole } = render(<AddProblemForm />);

  await act(async () => {
    fireEvent.change(getByTestId("url"), {
      target: {
        value: "www.google.com",
      },
    });
    fireEvent.submit(getByRole("button"));
  });

  expect(queryByTestId("url-msg")).toBeNull();
});
