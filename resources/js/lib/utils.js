import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { router } from "@inertiajs/react";
import { Toaster } from "@/Components/ui/sonner";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function flashMessage(params) {
  return params?.props?.flash_message;
}

function deleteAction(url, { closeModal, ...options } = {}) {
  const defaultOptions = {
    preserveScroll: true,
    preserveState: true,

    onSuccess: (success) => {
      const flash = flashMessage(success);
      if (flash && typeof Toaster?.[flash.type] === "function") {
        Toaster[flash.type](flash.message);
      }
      if (closeModal && typeof closeModal === "function") {
        closeModal();
      }
    },
    ...options,
  };

  router.delete(url, defaultOptions);
}

const formatDateIndo = (dateString) => {
  if (!dateString) return "-";
  return format(parseISO(dateString), "eeee, dd MMMM yyyy", { locale: id });
};

const formatToRupiah = (amount) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};

const BUDGETTYPE = {
  INCOME: "Penghasilan",
  SAVING: "Tabungan dan Investasi",
  DEBT: "Cicilan Hutang",
  BILL: "Tagihan",
  SHOPPING: "Belanja",
};

const BUDGETTYPEVARIANT = {
  [BUDGETTYPE.INCOME]: "emerald",
  [BUDGETTYPE.SAVING]: "orange",
  [BUDGETTYPE.DEBT]: "red",
  [BUDGETTYPE.BILL]: "sky",
  [BUDGETTYPE.SHOPPING]: "purple",
};

const MONTHTYPE = {
  JANUARI: "Januari",
  FEBRUARI: "Februari",
  MARET: "Maret",
  APRIL: "April",
  MEI: "Mei",
  JUNI: "Juni",
  JULI: "Juli",
  AGUSTUS: "Agustus",
  SEPTEMBER: "September",
  OKTOBER: "Oktober",
  NOVEMBER: "November",
  DESEMBER: "Desember",
};

const MONTHTYPEVARIANT = {
  [MONTHTYPE.JANUARI]: "fuchsia",
  [MONTHTYPE.FEBRUARI]: "orange",
  [MONTHTYPE.MARET]: "emerald",
  [MONTHTYPE.APRIL]: "sky",
  [MONTHTYPE.MEI]: "purple",
  [MONTHTYPE.JUNI]: "rose",
  [MONTHTYPE.JULI]: "pink",
  [MONTHTYPE.AGUSTUS]: "red",
  [MONTHTYPE.SEPTEMBER]: "violet",
  [MONTHTYPE.OKTOBER]: "blue",
  [MONTHTYPE.NOVEMBER]: "lime",
  [MONTHTYPE.DESEMBER]: "teal",
};

const ASSETTYPE = {
  CASH: "Kas",
  PERSONAL: "Personal",
  SHORTERM: "Investasi Jangka Pendek",
  MIDTERM: "Investasi Jangka Menengah",
  LONGTERM: "Investasi Jangka Panjang",
};

const ASSETTYPEVARIANT = {
  [ASSETTYPE.CASH]: "emerald",
  [ASSETTYPE.PERSONAL]: "orange",
  [ASSETTYPE.SHORTERM]: "red",
  [ASSETTYPE.MIDTERM]: "sky",
  [ASSETTYPE.LONGTERM]: "purple",
};

const LIABILITYTYPE = {
  SHORTERMDEBT: "Hutang Jangka Pendek",
  MIDTERMDEBT: "Hutang Jangka Menengah",
  LONGTERMDEBT: "Hutang Jangka Panjang",
};

const LIABILITYTYPEVARIANT = {
  [LIABILITYTYPE.SHORTERMDEBT]: "emerald",
  [LIABILITYTYPE.MIDTERMDEBT]: "orange",
  [LIABILITYTYPE.LONGTERMDEBT]: "red",
};

const LIABILITYTYPEDESCRIPTION = {
  [LIABILITYTYPE.SHORTERMDEBT]: "Tenor 1-5 Tahun",
  [LIABILITYTYPE.MIDTERMDEBT]: "Tenor 5-10 Tahun",
  [LIABILITYTYPE.LONGTERMDEBT]: "Tenor 10 Tahun",
};

const messages = {
  503: {
    title: "Service Unavailable",
    description: "Sorry, we are doing some maintenance. Please check back soon",
    status: 503,
  },
  500: {
    title: "Server Error",
    description: "Oops, something went wrong",
    status: 500,
  },
  404: {
    title: "Not Found",
    description: "Sorry, the page you are looking for could not be found",
    status: 404,
  },
  403: {
    title: "Forbidden",
    description: "Sorry, you are forbidden from accessing this page",
    status: 403,
  },
  401: {
    title: "Unauthorized",
    description: "Sorry, you are unauthorized to access this page",
    status: 401,
  },
  429: {
    title: "Too many Requests",
    description: "Please try again in just a second",
    status: 429,
  },
};

export {
  cn,
  flashMessage,
  deleteAction,
  formatDateIndo,
  formatToRupiah,
  BUDGETTYPE,
  BUDGETTYPEVARIANT,
  MONTHTYPE,
  MONTHTYPEVARIANT,
  ASSETTYPE,
  ASSETTYPEVARIANT,
  LIABILITYTYPE,
  LIABILITYTYPEVARIANT,
  LIABILITYTYPEDESCRIPTION,
  messages,
};