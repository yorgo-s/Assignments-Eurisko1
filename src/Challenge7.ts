type TaskStatus = "Pending" | "Completed";

interface Task {
  id: number;
  name: string;
  status: TaskStatus;
}

class TaskManager {
  private tasks: Task[] = [];
  private currentId: number = 1;

  addTask(name: string): void {
    this.tasks.push({ id: this.currentId++, name, status: "Pending" });
  }

  completeTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.status = "Completed";
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  displayTasks(): void {
    this.tasks.forEach((task) => {
      console.log(
        `Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`
      );
    });
  }
}

// Example usage:
console.log("Challenge 7");
const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a project");
taskManager.completeTask(1);
taskManager.displayTasks();
// Expected Output:
// Task ID: 1, Name: "Learn TypeScript", Status: Completed
// Task ID: 2, Name: "Build a project", Status: Pending
