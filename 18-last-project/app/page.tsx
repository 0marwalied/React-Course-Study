"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required.")
    .max(32, "Title must be at most 32 characters."),
  body: z.string().max(100, "Body must be at most 100 characters."),
  completed: z.boolean(),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Dialog>
        <form>
          <DialogTrigger
            render={
              <Button>
                <Plus /> New todo
              </Button>
            }
          />
          <DialogContent className="sm:max-w-sm p-0">
            <Card className="w-full sm:max-w-md">
              <CardHeader>
                <CardTitle>New Todo</CardTitle>
                <CardDescription>Add a task to your list.</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="todo-form" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      name="title"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="todo-form-title">
                            Title
                          </FieldLabel>
                          <Input
                            {...field}
                            id="todo-form-title"
                            aria-invalid={fieldState.invalid}
                            placeholder="Buy groceries"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="body"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="todo-form-body">
                            Body (optional)
                          </FieldLabel>
                          <InputGroup>
                            <InputGroupTextarea
                              {...field}
                              id="todo-form-body"
                              placeholder="Milk, eggs, bread"
                              rows={6}
                              className="min-h-24 resize-none"
                              aria-invalid={fieldState.invalid}
                            />
                            <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums">
                                {field.value.length}/100 characters
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <FieldDescription>
                            Any extra details about the task.
                          </FieldDescription>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="completed"
                      control={form.control}
                      render={({ field }) => (
                        <Field orientation="horizontal">
                          <Checkbox
                            id="todo-form-completed"
                            name={field.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                          <FieldLabel htmlFor="todo-form-completed">
                            Mark as completed
                          </FieldLabel>
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter>
                <Field orientation="horizontal">
                  <DialogClose
                    render={<Button type="button" variant="outline" />}
                    onClick={() => form.reset()}
                  >
                    Cancel
                  </DialogClose>
                  <Button type="submit" form="todo-form">
                    Submit
                  </Button>
                </Field>
              </CardFooter>
            </Card>
          </DialogContent>
        </form>
      </Dialog>
    </main>
  );
}
