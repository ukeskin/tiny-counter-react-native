import supabase from "./supabase";

export const getAllCounters = async () => {
  let { data: counters, error } = await supabase
    .from("counters")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    throw error;
  }
  return counters;
};

export const getCounterActivitiesValue = async (counterId, rangeDate) => {
  let startDate = new Date().toUTCString();
  let endDate = new Date().toUTCString();

  if (rangeDate === "D") {
    startDate = new Date().toUTCString();
  }
  if (rangeDate === "W") {
    startDate = new Date(
      new Date().setDate(new Date().getDate() - 7)
    ).toUTCString();
  }
  if (rangeDate === "M") {
    startDate = new Date(
      new Date().setMonth(new Date().getMonth() - 1)
    ).toUTCString();
  }
  if (rangeDate === "Y") {
    startDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ).toUTCString();
  }
  if (rangeDate === "All") {
    startDate = new Date(0).toUTCString();
  }

  let { data: activities, error } = await supabase
    .from("activities")
    .select("value")
    .eq("counter_id", counterId)
    .gte("created_at", startDate)
    .lte("created_at", endDate);
  if (error) {
    throw error;
  }

  let value = 0;
  activities.forEach((activity) => {
    value += activity.value;
  });

  return value;
};

export const getCounterActivities = async (counterId) => {
  let { data: activities, error } = await supabase
    .from("activities")
    .select("*")
    .eq("counter_id", counterId)
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return activities;
};

export const createCounter = async (data = { name: "New counter" }) => {
  let { data: counter, error } = await supabase.from("counters").insert([
    {
      name: data.name,
      background_color: data.value,
      unit: data.unit,
    },
  ]);
  if (error) {
    throw error;
  }
  return counter;
};
