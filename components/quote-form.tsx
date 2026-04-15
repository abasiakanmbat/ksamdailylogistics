const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#69B36B] focus:bg-white focus:ring-4 focus:ring-[#E5F4E6]";

export function QuoteForm() {
  return (
    <form id="quote-form" className="surface-card p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2F7A3A]">Get a quote</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">Book a courier service consultation</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Share your delivery details and the local Kamdan Sameday Logistics team can follow up with the
          right vehicle option and a tailored quote.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input className={fieldClassName} placeholder="Sender name" name="senderName" />
        <input className={fieldClassName} placeholder="Sender phone" name="senderPhone" />
        <input className={fieldClassName} placeholder="Sender email" name="senderEmail" type="email" />
        <input className={fieldClassName} placeholder="Pickup address" name="pickupAddress" />
        <input className={fieldClassName} placeholder="Pickup city" name="pickupCity" />
        <input className={fieldClassName} placeholder="Pickup postal code" name="pickupPostcode" />
        <input className={fieldClassName} placeholder="Drop-off address" name="dropoffAddress" />
        <input className={fieldClassName} placeholder="Drop-off city" name="dropoffCity" />
        <input className={fieldClassName} placeholder="Drop-off postal code" name="dropoffPostcode" />
        <input className={fieldClassName} placeholder="Package weight" name="packageWeight" />
        <input className={fieldClassName} placeholder="Package size" name="packageSize" />
        <select className={fieldClassName} name="vehicleType" defaultValue="">
          <option value="" disabled>
            Delivery vehicle type
          </option>
          <option value="motorbike">Motorbike</option>
          <option value="van">Van</option>
          <option value="truck">Truck</option>
        </select>
      </div>

      <textarea
        className={`${fieldClassName} mt-4 min-h-32 resize-y`}
        placeholder="Add other info"
        name="notes"
      />

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-[#dcefdc] bg-[#f4fbf5] p-4 text-sm leading-6 text-slate-700">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-[#3D9148]" />
        <span>
          I agree to receive communications from Kamdan Sameday Logistics about this quote request.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center rounded-full bg-[#031020] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1c35]"
      >
        Submit request
      </button>
    </form>
  );
}
