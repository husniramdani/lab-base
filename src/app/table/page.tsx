import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/ui/data-table/columns";

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/components/ui/data-table/data/schema";
import { ModeToggle } from "@/components/ui/mode-toggle";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/components/ui/data-table/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Page() {
  const tasks = await getTasks();

  return (
    <main className="min-h-svh flex flex-col items-center justify-center">
      <ModeToggle />
      <DataTable data={tasks} columns={columns} />
    </main>
  );
}
