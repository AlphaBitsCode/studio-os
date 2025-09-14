<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import type { DateValue } from '@internationalized/date';

	let {
		ref = $bindable(null),
		value = $bindable(),
		placeholder = $bindable(),
		class: className,
		weekdayFormat = 'short' as 'short' | 'long' | 'narrow',
		locale = 'en-US',
		disableDaysOutsideMonth = false,
		isDateUnavailable,
		isDateDisabled,
		type = 'single',
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
	class={cn('bg-background p-3 [--cell-size:theme(spacing.10)]', className)}
	{locale}
	{...restProps}
>
	{#snippet children({ months, weekdays })}
		<div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
			{#each months as month}
				<div class="space-y-4">
					<CalendarPrimitive.Header class="relative flex items-center justify-center pt-1">
						<CalendarPrimitive.PrevButton
							class="absolute left-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-input bg-background bg-transparent p-0 text-sm font-medium whitespace-nowrap opacity-50 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
						/>
						<CalendarPrimitive.Heading class="text-sm font-medium" />
						<CalendarPrimitive.NextButton
							class="absolute right-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-input bg-background bg-transparent p-0 text-sm font-medium whitespace-nowrap opacity-50 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
						/>
					</CalendarPrimitive.Header>
					<CalendarPrimitive.Grid class="w-full border-collapse space-y-1">
						<CalendarPrimitive.GridHead>
							<CalendarPrimitive.GridRow class="flex">
								{#each weekdays as weekday}
									<CalendarPrimitive.HeadCell
										class="flex w-8 flex-1 items-center justify-center rounded-md text-[0.8rem] font-normal text-muted-foreground"
									>
										{weekday.slice(0, 2)}
									</CalendarPrimitive.HeadCell>
								{/each}
							</CalendarPrimitive.GridRow>
						</CalendarPrimitive.GridHead>
						<CalendarPrimitive.GridBody>
							{#each month.weeks as weekDates}
								<CalendarPrimitive.GridRow class="mt-2 flex w-full">
									{#each weekDates as date}
										<CalendarPrimitive.Cell
											{date}
											month={month.value}
											class="relative flex flex-1 items-center justify-center p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([data-outside-month])]:text-muted-foreground"
										>
											<CalendarPrimitive.Day
												class="inline-flex h-8 w-8 items-center justify-center rounded-md p-0 text-sm font-medium font-normal whitespace-nowrap transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 data-[outside-month]:text-muted-foreground data-[outside-month]:opacity-50 data-[unavailable]:line-through data-[unavailable]:opacity-30 [&[aria-selected]]:bg-primary [&[aria-selected]]:text-primary-foreground"
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
