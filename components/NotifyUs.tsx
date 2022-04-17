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
function Form() {
  const form = useForm<{
    name: string;
    shopName: string;
    shopAddress: string;
    shopPhone: number;
    time: Date | undefined;
    note: string | undefined;
  }>({
    initialValues: {
      name: "",
      shopName: "",
      shopAddress: "",
      shopPhone: undefined,
      time: undefined,
      note: "",
    },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      shopPhone:
        values.shopPhone === undefined
          ? "number is required"
          : values.shopPhone >= 100000000 && values.shopPhone <= 999999999
          ? "You must be at least 9 digits"
          : null,
      shopName: values.shopName.length < 2 ? "Too short shop name" : null,
      shopAddress:
        values.shopAddress.length < 2 ? "Too short shop address" : null,
      time: values.time === undefined ? "time is required" : null,
    }),
  });

  const submitForm = async (data: {
    name: string;
    shopName: string;
    shopAddress: string;
    shopPhone: number;
    time: Date | undefined;
    note: string | undefined;
  }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/form/requests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.shopName,
          shop_name: data.shopName,
          phone_number: data.shopPhone.toString(),
          address: data.shopAddress,
          note: data.note || null,
          pickup_time: data.time.toISOString(),
        }),
      }
    );

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
          label="Shop Name"
          placeholder="Name"
          {...form.getInputProps("shopName")}
        />
        <TextInput
          label="Shop Address"
          placeholder="Address"
          {...form.getInputProps("shopAddress")}
        />
        <NumberInput
          mt="sm"
          hideControls
          label="Shop Mobile Number"
          placeholder="Mobile"
          {...form.getInputProps("shopPhone")}
        />
        <div className="mt-3 col-span-6 ">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time
          </label>
          <TimeInput
            name="time"
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            format="12"
            defaultValue={new Date()}
            {...form.getInputProps("time")}
          />
        </div>
        <div className="mt-3 col-span-6 ">
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700"
          >
            Note for us
          </label>
          <Textarea placeholder="Note" {...form.getInputProps("note")} />
        </div>

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
            Notify Us
          </button>
        </Group>
      </form>
    </Box>
  );
}
export default Form;
