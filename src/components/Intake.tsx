'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import IntakeFormSchema from "@/src/lib/utils/schema/IntakeFormSchema";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";

export default function Intake() {
  const form = useForm<z.infer<typeof IntakeFormSchema>>({
    resolver: zodResolver(IntakeFormSchema),
    defaultValues: {
      name: "",
      address: "",
      company: "",
      email: "",
      phone: "",
      description: "",
      isDifficult: false
    },
  })

  const onSubmit = (data: z.output<typeof IntakeFormSchema>) => {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="text-indigo-600 w-4 h-4"/>Catalogue Matcher
        </CardTitle>
        <CardDescription>
          Find the best matching from our catalogue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-intake" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-intake-name">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-intake-name"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="company"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="form-intake-company">
                    Company
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-intake-company"
                    autoComplete="off"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-intake-phone">
                    Phone
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-intake-phone"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-intake-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-intake-email"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-intake-address">
                    Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-intake-address"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-intake-description">
                    Description (1–5 sentences)
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-intake-description"
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup className="mt-5">
            <Controller
              name="isDifficult"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">
                    Difficult Access (site)
                  </FieldLegend>
                  <FieldGroup data-slot="checkbox-group">
                    <Field orientation="horizontal">
                      <Checkbox
                        id="form-intake-difficult"
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldLabel
                        htmlFor="form-intake-difficult"
                        className="font-normal"
                      >
                        Require ladder/scaffold or special access
                      </FieldLabel>
                    </Field>
                  </FieldGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="form-intake">
            Run Matching
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Clear
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}