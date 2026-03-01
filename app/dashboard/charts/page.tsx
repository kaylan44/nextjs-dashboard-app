
'use client'

import { fetchCardData } from '@/app/lib/data';
import { Card } from '@/app/ui/dashboard/cards';
import { AreaChart } from '@/app/ui/dashboard/area-chart';
import { BarChart } from '@/app/ui/dashboard/bar-chart';

const lineChartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  },
  {
    date: "Oct 23",
    SolarPanels: 2837,
    Inverters: 2473,
  },
  {
    date: "Nov 23",
    SolarPanels: 2954,
    Inverters: 3848,
  },
  {
    date: "Dec 23",
    SolarPanels: 3239,
    Inverters: 3736,
  },
]

const barChartdata = [
  {
    date: "Jan 23",
    SolarPanels: 2890,
    Inverters: 2338,
  },
  {
    date: "Feb 23",
    SolarPanels: 2756,
    Inverters: 2103,
  },
  {
    date: "Mar 23",
    SolarPanels: 3322,
    Inverters: 2194,
  },
  {
    date: "Apr 23",
    SolarPanels: 3470,
    Inverters: 2108,
  },
  {
    date: "May 23",
    SolarPanels: 3475,
    Inverters: 1812,
  },
  {
    date: "Jun 23",
    SolarPanels: 3129,
    Inverters: 1726,
  },
  {
    date: "Jul 23",
    SolarPanels: 3490,
    Inverters: 1982,
  },
  {
    date: "Aug 23",
    SolarPanels: 2903,
    Inverters: 2012,
  },
  {
    date: "Sep 23",
    SolarPanels: 2643,
    Inverters: 2342,
  }
]

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <div>
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value="500" type="collected" />
        <Card title="Pending" value="200" type="pending" />
        <Card title="Total Invoices" value="1000" type="invoices" />
        <Card
          title="Total Customers"
          value="50"
          type="customers"
        /> */}
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />




      {/* Area CHARTS !!!!! */}
      {/* ------------------------------------- */}
      <div className="mt-6 rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <AreaChart
            className="h-80"
            data={lineChartdata}
            index="date"
            categories={["SolarPanels", "Inverters"]}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat("us").format(number).toString()}`
            }
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>

      {/* BAR CHARTS !!!!! */}
      {/* ------------------------------------- */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">

        <div className="flex flex-col gap-16">
          <div className="mt-6 rounded-xl bg-gray-50 p-2 shadow-sm">
            <BarChart
              type="default"
              className="h-52"
              data={barChartdata}
              index="date"
              categories={["SolarPanels", "Inverters"]}
              showLegend={false}
            />
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex flex-col gap-4">
            <BarChart
              type="stacked"
              className="h-52"
              data={barChartdata}
              index="date"
              categories={["SolarPanels", "Inverters"]}
              showLegend={false}
            />
          </div>
        </div>
      </div>
    </div >
  );
}
