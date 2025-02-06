import { render, screen, fireEvent } from "@testing-library/react";
import ClientRegistration from "@/components/register/ClientRegistration";
import { UseFormReturn, FieldValues, useForm } from "react-hook-form";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  })),
}));

// Mock other modules
jest.mock("@tanstack/react-query", () => ({
  useMutation: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

// Import the mocked functions with proper typing
const mockedUseMutation = jest.mocked(useMutation);
const mockedUseForm = jest.mocked(useForm);
const mockedUseRouter = jest.mocked(useRouter);

describe("ClientRegistration Component", () => {
  const mockMutate = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock router
    (mockedUseRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: jest.fn(),
      back: jest.fn(),
    });

    // Mock useForm
    (mockedUseForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: (fn: any) => fn,
      control: {},
      setValue: jest.fn(),
      formState: { errors: {} },
    } as unknown as UseFormReturn<FieldValues>);

    // Mock useMutation
    (mockedUseMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    } as unknown as UseMutationResult);
  });

  test("renders form fields correctly", () => {
    render(<ClientRegistration />);

    expect(
      screen.getByPlaceholderText(/Enter your first name/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your family name/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your email/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your password/i),
    ).toBeInTheDocument();
  });

  test("handles form submission", () => {
    render(<ClientRegistration />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/Enter your first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter your family name/i), {
      target: { value: "Doe" },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole("form"));

    expect(mockMutate).toHaveBeenCalled();
  });

  test("handles location detection", () => {
    // Create mock coordinates with toJSON method
    const mockCoords = {
      latitude: 35.6895,
      longitude: 139.6917,
      accuracy: 0,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
      toJSON() {
        return {
          latitude: this.latitude,
          longitude: this.longitude,
          accuracy: this.accuracy,
          altitude: this.altitude,
          altitudeAccuracy: this.altitudeAccuracy,
          heading: this.heading,
          speed: this.speed,
        };
      },
    };

    // Create mock position with toJSON method
    const mockPosition = {
      coords: mockCoords,
      timestamp: Date.now(),
      toJSON() {
        return {
          coords: this.coords.toJSON(),
          timestamp: this.timestamp,
        };
      },
    };

    // Mock geolocation
    const mockGeolocation = {
      getCurrentPosition: jest.fn((success: PositionCallback) =>
        success(mockPosition),
      ),
    };

    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
      writable: true,
    });

    render(<ClientRegistration />);

    const detectButton = screen.getByText(/Detect Location/i);
    fireEvent.click(detectButton);

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
