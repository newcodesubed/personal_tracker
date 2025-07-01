import supabase from "./supabase";

export async function getTask() {
  const { data, error } = await supabase.from("task").select("*");
  if (error) {
    console.error(error);
    throw new Error("Task could not be loaded");
  }
  return data;
}
