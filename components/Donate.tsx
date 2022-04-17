import { useForm } from "@mantine/form";
import {
  Box,
  TextInput,
  NumberInput,
  Button,
  Textarea,
  Group,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
function Donate() {
  const form = useForm<{
    name: string;
    email: "";
    shopPhone: number;
    amount: number;
  }>({
    initialValues: {
      name: "",
      email: "",
      shopPhone: undefined,
      amount: undefined,
    },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
      shopPhone:
        values.shopPhone === undefined
          ? "number is required"
          : values.shopPhone >= 100000000 && values.shopPhone <= 999999999
          ? "You must be at least 9 digits"
          : null,
      amount: values.amount === undefined ? "amount is required" : null,
    }),
  });

  const submitForm = async (data: {
    name: "";
    email: "";
    shopPhone: undefined;
    amount: undefined;
  }) => {
    console.log(data);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/donate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        contact_number: parseInt(data.shopPhone),
        amount: parseFloat(data.amount),
      }),
    });

    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 450 }} mx="auto">
      <form onSubmit={form.onSubmit(submitForm)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <NumberInput
          mt="sm"
          label="Shop Contact Number"
          placeholder="Mobile"
          hideControls
          {...form.getInputProps("shopPhone")}
        />
        <NumberInput
          mt="sm"
          label="Amount"
          precision={2}
          step={0.5}
          hideControls
          placeholder="100/-Rs"
          {...form.getInputProps("amount")}
        />

        <Group position="right" mt="md">
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-orange-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-orange-700 hover:shadow-lg
      focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-orange-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Donate
          </button>
        </Group>
      </form>
    </Box>
  );
}
export default Donate;
