<script lang="ts">
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import type { DateValue } from "@internationalized/date";

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className,
		weekdayFormat = "short" as "short" | "long" | "narrow",
		locale = "en-US",
		disableDaysOutsideMonth = false,
		isDateUnavailable,
		isDateDisabled,
		type = "single",
		...restProps
	} = $props();

</script>

<CalendarPrimitive.Root
	bind:value
	bind:ref
	bind:placeholder
	{type}
	{weekdayFormat}
	{disableDaysOutsideMonth}
	{isDateUnavailable}
	{isDateDisabled}
	class={cn(
		"p-3 bg-background [--cell-size:theme(spacing.10)]",
		className
	)}
	{locale}
	{...restProps}
>
	{#snippet children({ months, weekdays })}
		<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
			{#each months as month}
				<div class="space-y-4">
					<CalendarPrimitive.Header class="flex justify-center pt-1 relative items-center">
						<CalendarPrimitive.PrevButton
							class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
						/>
						<CalendarPrimitive.Heading class="text-sm font-medium" />
						<CalendarPrimitive.NextButton
							class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
						/>
					</CalendarPrimitive.Header>
					<CalendarPrimitive.Grid class="w-full border-collapse space-y-1">
						<CalendarPrimitive.GridHead>
							<CalendarPrimitive.GridRow class="flex">
								{#each weekdays as weekday}
									<CalendarPrimitive.HeadCell
										class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] flex-1 flex items-center justify-center"
									>
										{weekday.slice(0, 2)}
									</CalendarPrimitive.HeadCell>
								{/each}
							</CalendarPrimitive.GridRow>
						</CalendarPrimitive.GridHead>
						<CalendarPrimitive.GridBody>
							{#each month.weeks as weekDates}
								<CalendarPrimitive.GridRow class="flex w-full mt-2">
									{#each weekDates as date}
										<CalendarPrimitive.Cell {date} month={month.value} class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([data-outside-month])]:text-muted-foreground flex-1 flex items-center justify-center">
											<CalendarPrimitive.Day
												class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal aria-selected:opacity-100 data-[outside-month]:text-muted-foreground data-[outside-month]:opacity-50 [&[aria-selected]]:bg-primary [&[aria-selected]]:text-primary-foreground data-[unavailable]:line-through data-[unavailable]:opacity-30"
											/>
										</CalendarPrimitive.Cell>
									{/each}
								</CalendarPrimitive.GridRow>
							{/each}
						</CalendarPrimitive.GridBody>
					</CalendarPrimitive.Grid>
				</div>
			{/each}
		</div>
	{/snippet}
</CalendarPrimitive.Root>